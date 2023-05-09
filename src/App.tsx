import './styles.css'
import React from 'react'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <Card className="App">
      <Button>
        <Link to={'/MenuTree'}> 递归&广度查找tree数据的速度对比</Link>
      </Button>
    </Card>
  )
}
