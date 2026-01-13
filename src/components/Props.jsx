import ConditionalRender from "./ConditionalRender";
import Trainer from "./Trainer";

function Props() {
    return (
        <>
            <h2>Props</h2>
            <Trainer name="JH" age={31} specialism="Java" />
            <Trainer name="CG" age={32} specialism="Web" />
            {
                Trainer({ name: "MS", age: 42 })
            }
            <ConditionalRender />
            <br />
            <ConditionalRender bool />
        </>
    );
}

export default Props;