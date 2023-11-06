import { useState } from "react";
import { EXAMPLES } from "../Data/data";
import TabButton from "./TabButton";


export default function Examples(){

    const [topic, setTopic] = useState('');

    function handleSelect(name){
     setTopic(name)
  }
  
    return(
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={topic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={topic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={topic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={topic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!topic ? (<p>Please Select a Topic</p>) 
          :
          ( <div id='tab-content'>
          <h3>{EXAMPLES[topic].title}</h3>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>
            {EXAMPLES[topic].code}
            </code>
          </pre>
        </div>)}     
        </section>
    )
}