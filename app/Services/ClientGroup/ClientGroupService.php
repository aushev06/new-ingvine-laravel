<?php

namespace App\Services\ClientGroup;

use App\Models\ClientGroup;
use App\Models\ClientGroupDiscount;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ClientGroupService
{
    public function save(FormRequest $request, ClientGroup $clientGroup): ClientGroup
    {
        $clientGroup->fill($request->all(['name', 'is_default']));
        if (!$clientGroup->save()) {
            throw ValidationException::withMessages(['message' => __("Не удалось сохранить запись!")]);
        }
        if ($clientGroup->is_default) {
            ClientGroup::query()->where('id', '!=', $clientGroup->id)->update(['is_default' => false]);
        }

        $ids = [];

        foreach ($request->Step as $step) {
            $discount = $step['id'] ? ClientGroupDiscount::query()->where('id', $step['id'])->first() : new ClientGroupDiscount();
            $discount->client_group_id = $clientGroup->id;
            $discount->fill($step);
            $discount->save();
            $ids[] = $discount->id;
        }

        ClientGroupDiscount::query()->whereNotIn('id', $ids)->where('client_group_id', $clientGroup->id)->delete();
        return $clientGroup;
    }

    public function getDiscount(User $user, int $clientGroupId, float $totalSumOrder)
    {
        $percent = $this->getDiscountPercent($user, $clientGroupId);
        return ($totalSumOrder * $percent) / 100;
    }

    public function getDiscountPercent(User $user) {
        $totalByUser = $this->getTotalByUser($user->id);
        $discount = ClientGroupDiscount::query()
            ->where('client_group_id', $user->client_group_id)
            ->where('transition_threshold_value', '<=', $totalByUser)
            ->orderBy('transition_threshold_value', 'DESC')
            ->first();

        if (!$discount) {
            return 0;
        }

        return $discount->discount_percent_value;
    }

    public function getTotalByUser(int $userId): float
    {
        return DB::select('SELECT SUM(total) as total FROM orders WHERE user_id = ?', [$userId])[0]->total ?? 0;
    }
}
