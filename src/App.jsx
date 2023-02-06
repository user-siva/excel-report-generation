import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  intColumn
} from 'react-datasheet-grid'
import { useState } from 'react'
import 'react-datasheet-grid/dist/style.css'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';


function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    setChartBool(true)
    console.log(chartBool)
  }

  const [data, setData] = useState([
    { reg_no: '', Name: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '' },
    { reg_no: '', Name: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '' },
    { reg_no: '', Name: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '' },

  ])

  const [chartBool, setChartBool] = useState(false)

  const columns = [
    { ...keyColumn('reg_no', intColumn), title: 'Reg No' },
    { ...keyColumn('Name', textColumn), title: 'Name' },
    { ...keyColumn('1', intColumn), grow: 2, title: '1. Presented the Course in a well organized manner' },
    { ...keyColumn('2', intColumn), title: '2. Stimulated interest in the course' },
    { ...keyColumn('3', intColumn), title: '3. Explained the Course content very clearly' },
    { ...keyColumn('4', intColumn), title: '4. Asked questions to promote interaction and reflective thinking' },
    { ...keyColumn('5', intColumn), title: '5. Used appropriate content delivery methods' },
    { ...keyColumn('6', intColumn), title: '6. Clarified all the doubts' },
    { ...keyColumn('7', intColumn), title: '7. Offered compliments for creativity' },
    { ...keyColumn('8', intColumn), title: '8. Engaged the class regularly and maintained discipline' },
    { ...keyColumn('9', intColumn), title: '9. Returned the valued answer scripts promptly providing feedback on the performance' },
    { ...keyColumn('10', intColumn), title: '10.Covered the entire syllabus at appropriate pace' },
    { ...keyColumn('11', intColumn), title: '11. The course is relevant to the programmed of study' },
    { ...keyColumn('12', intColumn), title: '12. The course is at the right level for you' },
    { ...keyColumn('13', intColumn), title: '13. The course contents are sufficien' },
    { ...keyColumn('14', intColumn), title: '14. The recommended text and reference books are useful' },
    { ...keyColumn('15', intColumn), title: '15. The Course outcome assessment methods are appropriate' },

  ]


  return (
    <>
      <h1>Feedback System</h1>
      <DataSheetGrid
        value={data}
        onChange={setData}
        columns={columns}
        headerRowHeight={200}
        height={5000}
        rowHeight={30}
        autoAddRow={true}
        className="grid"
      />
      <form onSubmit={handleSubmit}>
        <button type='submit'>Generate chart</button>
      </form>
      {chartBool &&
        <>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="1"
              isAnimationActive={true}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="2"
              isAnimationActive={true}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="3"
              isAnimationActive={true}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </>

      }

    </>
  )
}

export default App;
