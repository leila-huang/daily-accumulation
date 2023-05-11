import "./styles.css";
import MenuTree from './pages/MenuTree'
import AllWithSelect from './pages/AllWithSelect'
import { Link } from 'react-router-dom'
import { Button, Card } from 'antd'

export default function App() {
  return (
    <Card className="App">
      <Button>
        <Link to={'/MenuTree'}>递归&广度查找tree数据的速度对比</Link>
      </Button>
      <Button>
        <Link to={'/AllWithSelect'}>select支持全选的hook</Link>
      </Button>
      <Button>
        <Link to={'/DeepOperation'}>深过滤、深对比、深拷贝实现</Link>
      </Button>
    </Card>
  )
}
