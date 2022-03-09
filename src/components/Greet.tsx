type GreetProps = {
    name: string;
};

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>HELLO {props.name}</h2>
        </div>
    );
};
