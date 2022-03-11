type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
//It doesn't matter if we pass the event as a prop 
//or as a defined function within the component
export const Input = (props: InputProps) => {
    const handleInputCharge = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <input type="text" value={props.value} onChange={/*props.handleChange*/handleInputCharge} />
    );
};
