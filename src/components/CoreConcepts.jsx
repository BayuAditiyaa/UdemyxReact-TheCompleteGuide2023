import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../Data/data'

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={index} {...conceptItem}/>
            ))}
            {/* <CoreConcepts
              {...CORE_CONCEPTS[0]}
            />
                        <CoreConcepts
              {...CORE_CONCEPTS[1]}
            />
                        <CoreConcepts
              {...CORE_CONCEPTS[2]}
            />
                        <CoreConcepts
              {...CORE_CONCEPTS[3]}
            /> */}
          </ul>
        </section>
    )
}