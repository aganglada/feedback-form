import * as React from 'react'
import format from 'date-fns/format'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { Comment } from '../../core/context/comment'

type Props = {
  data: Comment[]
}

function Graph(props: Props): JSX.Element {
  const graphData = React.useMemo(
    () =>
      props.data.map((comment) => {
        return {
          ...comment,
          datetime: format(comment.datetime, 'dd-MM-yyyy HH:mm'),
        }
      }),
    [props.data]
  )

  return (
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={graphData}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 30,
        }}
      >
        <XAxis hide dataKey="datetime" />
        <YAxis
          stroke="transparent"
          tick={{ fill: 'white' }}
          domain={[1, 5]}
          tickCount={5}
        />
        <Line type="monotone" dataKey="rating" stroke="white" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
