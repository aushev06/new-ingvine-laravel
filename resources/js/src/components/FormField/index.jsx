import styles from './FormField.module.scss';
import React from 'react';
import {useFormContext} from "react-hook-form";
import clsx from "clsx";
import get from 'lodash/get';

export const FormField = React.forwardRef(function FormField(
        {
            label,
            name,
            placeholder,
            error,
            type = 'text',
            readOnly,
            register,
            className,
            textarea = false,
            onChange,
            onKeyUp,
            onBlur,
            onFocus,
            autocomplete,
            defaultValue,
            testId,
            formFieldsRef,
            max,
            min,
            suffix,
            disabled,
            prefix,
            showError = true,
        },
        ref) {
        const formContext = useFormContext();
        const errorFromContext = get(formContext?.errors, `${name}.message`);

        return (
            <div ref={ref} className={clsx(styles.formField, className)}>
                {label && <b>{label}</b>}

                <div className={styles.field}>
                    {prefix && <div className={styles.prefix}>{prefix}</div>}
                    {textarea ? (
                        <textarea
                            onBlur={onBlur}
                            onChange={onChange}
                            onFocus={onFocus}
                            onKeyUp={onKeyUp}
                            placeholder={placeholder}
                            name={name}
                            // From docs: It's important to apply ref={register()} instead of ref={register} when working with useFieldArray so register will get invoked during map.
                            // this is a temporary solution so as not to break something
                            ref={formFieldsRef ? register && register() : register}
                            defaultValue={defaultValue}
                            data-test-id={testId}
                            disabled={disabled}
                            autoComplete={'off'}
                            id={name}
                        />
                    ) : (
                        <input
                            {...register(name)}
                            placeholder={placeholder}
                            type={type}
                            name={name}
                            readOnly={readOnly}
                            // From docs: It's important to apply ref={register()} instead of ref={register} when working with useFieldArray so register will get invoked during map.
                            // this is a temporary solution so as not to break something
                            defaultValue={defaultValue}
                            data-test-id={testId}
                            max={max}
                            min={min}
                            disabled={disabled}
                            autoComplete={name}
                            id={name}
                        />
                    )}
                    {suffix && <div className={clsx(styles.suffix, {[styles.suffixDisabled]: disabled})}>{suffix}</div>}
                </div>

                {showError && (error || errorFromContext) && (
                    <p className={styles.formFieldError} data-test-id={`${name}-error-message`}>
                        {error || errorFromContext}
                    </p>
                )}
            </div>
        );
    }
)
