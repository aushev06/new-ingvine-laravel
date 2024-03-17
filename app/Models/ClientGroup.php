<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property boolean $is_default
 */
class ClientGroup extends Model
{
    use HasFactory;

    protected $fillable = ['is_default', 'name'];
    protected $with = ['steps'];


    public function steps()
    {
        return $this->hasMany(ClientGroupDiscount::class);
    }
}
