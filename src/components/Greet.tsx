type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
    //If message count is passed it will use it's value
    //If not it will use 0 as a default value
    const { messageCount = 0 } = props;
    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `Welcome ${props.name}! You have ${messageCount} unread messages`
                    : `Welcome Guest`}
            </h2>
        </div>
    );
};
