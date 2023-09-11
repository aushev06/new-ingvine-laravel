import React, {useRef, useState} from 'react'
import AsyncSelect from 'react-select/async';
import axios from 'axios'

const config = {
    foodPropertyStatus: ["Неактивно", "Активно"]
}

const request = (value) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 052d52c119fd1876139c1653998f662b6942b9ea");
    myHeaders.append("Cookie", "_csrf=5669341c6feabea8031b9ce7b448e555ecf2715d74348bbd93a12bcf523de669a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22iiIWCPXtAd-FXQsgwlyxmNNVjrBzpG2e%22%3B%7D");

    var raw = "";

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return axios
        .get('/api/pos-foods?name=' + value, {
            headers: {
                "Accept": "application/json"
            }
        })
}

const Form = ({id, name, price, old_price, is_visible, idx, sort, addVariant, mitm_id, mitm_name}) => {
    const refMitmName = useRef(null);
    const refMitmId = useRef(null);
    const promiseOptions = (inputValue) => {
        return request(inputValue).then(r => {
            return r.data;
        })
    }

    return (
        <div className={"col-md-12 mt-1"}>
            <div className="box_general padding_bottom">
                <div className="header_box version_2">
                    <h2><i className="fa fa-plus"></i>Вариация</h2>
                </div>
                <input type="hidden" name={`FoodProperty[${idx}][id]`} defaultValue={id}/>
                <input type="hidden" name={`FoodProperty[${idx}][sort]`} defaultValue={sort || idx}/>
                <div>
                    <div className="form-group">
                        <label>Название</label>
                        <input className="form-control" defaultValue={name} type="text"
                               name={`FoodProperty[${idx}][name]`}/>
                    </div>
                    <div className="form-group">
                        <label>Цена</label>
                        <input className="form-control" defaultValue={price} type="text"
                               name={`FoodProperty[${idx}][price]`}/>
                    </div>
                    <div className="form-group">
                        <label>Старая цена</label>
                        <input className="form-control" defaultValue={old_price} type="text"
                               name={`FoodProperty[${idx}][old_price]`}/>
                    </div>

                    <div className="form-group">
                        <label>Статус</label>
                        <select key={`${is_visible?.toString()}`} defaultValue={is_visible || ""} name={`FoodProperty[${idx}][is_visible]`}
                                className="form-control">
                            <option value="">Выберите статус</option>
                            {
                                config.foodPropertyStatus.map((status, key) => {
                                    return <option value={key} key={status}>{status}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Блюдо из FPOS</label>
                        <AsyncSelect key={`${mitm_name}_${mitm_id}_${id}`} label={mitm_name}
                                     defaultValue={{label: `${mitm_name}`, value: 0}} onChange={(item) => {
                            refMitmName.current.value = item.label;
                            refMitmId.current.value = item.value;
                        }} cacheOptions defaultOptions loadOptions={promiseOptions}/>
                        <input ref={refMitmName} type="hidden" name={`FoodProperty[${idx}][mitm_name]`}
                               defaultValue={mitm_name}/>
                        <input ref={refMitmId} type="hidden" name={`FoodProperty[${idx}][mitm_id]`}
                               defaultValue={mitm_id}/>
                    </div>

                </div>

                <div className="form-group float-right">
                    <button className="btn btn-info" type={'button'} onClick={addVariant}>+
                    </button>
                </div>

                <div className="clearfix"></div>


            </div>
        </div>
    )
}

export default Form;
