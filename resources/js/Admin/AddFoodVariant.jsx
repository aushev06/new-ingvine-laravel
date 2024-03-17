import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Form from './_form';
import AsyncSelect from "react-select/async";

const templateVariant = {id: null, name: '', price: null, old_price: null, is_visible: null, sort: null}
const ELEMENT_ID = "react-add-variants-new";

class AddFoodVariants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variants: [templateVariant]
        }
    }

    componentDidMount() {
        const element = $("#" + ELEMENT_ID);
        const json = JSON.parse(element.attr('data-foods'));

        this.setState({
            variants: json.length > 0 ? json : [templateVariant]
        })
    }

    addVariants() {
        let variants = _.cloneDeep(this.state.variants);
        variants.push(templateVariant);

        this.setState({
            variants
        });
    }

    render() {
        return (
            <div className={"row"}>
                {this.state.variants.map((item, key) => {
                    return (<Form {...item} idx={key} key={key} addVariant={this.addVariants.bind(this)}/>)
                })}
            </div>
        )
    }
}

if (document.getElementById(ELEMENT_ID)) {
    ReactDOM.render(<AddFoodVariants/>, document.getElementById(ELEMENT_ID));
}


const ELEMENT_STEP_ID = "react-steps";

const AddClientGroupSteps = () => {
    const element = $("#" + ELEMENT_STEP_ID);

    const [steps, setSteps] = useState(JSON.parse(element.attr('data-steps')));

    const addStep = () => {
        setSteps([...steps, {id: null, transition_threshold_value: 0, discount_percent_value: 0,}]);
    }

    const onDelete = (idx) => {
        if (steps.length === 1) {
            alert('Нельзя удалить единственный элемент!');
            return;
        }

        setSteps(steps.filter((s, _idx) => idx !== _idx));
    }


    return (
        <div className={'row'}>
            {steps.map((step, idx) => <StepForm {...step} idx={idx} key={idx} addStep={addStep} onDelete={onDelete}/>)}
        </div>
    )
}

const StepForm = ({id, transition_threshold_value, discount_percent_value, addStep, idx, onDelete}) => {
    return (
        <div className={"col-md-12 mt-1"}>
            <div className="box_general padding_bottom">
                <div className="header_box version_2 d-flex justify-content-between align-items-center">
                    <div>
                        <h2><i className="fa fa-plus"></i>Шаг {idx + 1}</h2>
                    </div>
                    <div>
                        <button type={'button'} className={'btn btn-danger text-center'} onClick={() => onDelete(idx)}>
                            X
                        </button>
                    </div>
                </div>
                <input type="hidden" name={`Step[${idx}][id]`} defaultValue={id}/>
                <div>
                    <div className="form-group">
                        <label>Порог перехода</label>
                        <input className="form-control" defaultValue={transition_threshold_value} type="text"
                               name={`Step[${idx}][transition_threshold_value]`}/>
                    </div>
                    <div className="form-group">
                        <label>Процент скидки</label>
                        <input className="form-control" defaultValue={discount_percent_value} type="text"
                               name={`Step[${idx}][discount_percent_value]`}/>
                    </div>
                </div>

                <div className="form-group float-right">
                    <button className="btn btn-info" type={'button'} onClick={addStep}>+
                    </button>
                </div>

                <div className="clearfix"></div>


            </div>
        </div>
    )
}

if (document.getElementById(ELEMENT_STEP_ID)) {
    ReactDOM.render(<AddClientGroupSteps/>, document.getElementById(ELEMENT_STEP_ID));
}
