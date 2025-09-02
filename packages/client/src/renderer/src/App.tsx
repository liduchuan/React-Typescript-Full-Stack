import { sum } from 'tool'
import { Button } from 'ui'

function App(): React.JSX.Element {
  return (
    <div className="text-2xl font-bold underline">
      hello {sum(1, 2, 3)}
      <Button />
    </div>
  )
}

export default App
