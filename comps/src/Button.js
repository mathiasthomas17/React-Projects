// import PropTypes  from "prop-types"
import classNames from "classnames"

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    // using clasnames library
    // Also using Ract Icons 
    const classes = classNames('px-3 py-2 border m-2 flex items-center gap-2',{
        'bg-blue-700 border-blue-700 text-white': primary, //primary === true
        'bg-yellow-700 border-yellow-700 text-white': secondary, //secondary === true
        'bg-red-700 border-red-700 text-white': danger, //danger === true
        'bg-green-700 border-green-700 text-white': success, //success === true
        'bg-yellow-500 border-yellow-500 text-white': warning, //warning === true
        'rounded-md': rounded, //rounded === true
        'bg-white':outline, //outline === true
        'text-yellow-500':outline && secondary,
        'text-red-900':outline && danger,
        'text-green-500':outline && success,
        'text-yellow-400':outline && warning
    })

    return <button {...rest} className={classes}>{children}</button>
}


// Validating Usinf Prop-Types Library
Button.propTypes = {
    checkVariationValues:({primary,secondary,success,warning,danger})=>{
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)

        if(count>1){
            return new Error('Only one of Primary,Secondary,Success,Warning and Danger Can be TRUE')
        }
    
    }
}

export default Button 