export const Disp = (props) => {
    return (
    <div>
        {props.isGas===false ? props.name : ""}
    </div>
    );
}