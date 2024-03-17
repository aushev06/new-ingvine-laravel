<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $transition_threshold_value
 * @property int $discount_percent_value
 * @property int $client_group_id
 */
class ClientGroupDiscount extends Model
{
    use HasFactory;

    protected $fillable = ['transition_threshold_value', 'discount_percent_value', 'client_group_id'];
}
