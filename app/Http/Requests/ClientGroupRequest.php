<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientGroupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required'],
            'Step' => ['array', 'required'],
            'Step.*.transition_threshold_value' => ['required'],
            'Step.*.discount_percent_value' => ['required']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge(['is_default' => strtolower($this->is_default) === 'on']);
    }
}
