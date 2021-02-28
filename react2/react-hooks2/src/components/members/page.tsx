import * as React from 'react';
import { MemberHeader } from './memberHeader';
import {MemberRow} from './memberRow';
import { memberAPI } from '../../api/members';
// ts+react比js+react多一个 model 层
//对数据
import {MemberEntity} from '../../model';
//类型数组里用 泛型<Props,State>
interface State{
//  members:any[]
  members:MemberEntity[];
}

interface Props{

}

export class MemberPage extends React.Component<Props,State> {
  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  }
  // public 
  public componentDidMount() {
    // 组件和API 分离点在这里
    // ajax 
    // memberAPI
    this.setState({
      members: memberAPI.fetchMembers()
    })
  }

  render() {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
             {
                //  遍历我们的state数据，ts会报错呢？ state 类型是什么，
                 //显示每个用户的 MemberRow 组件
                 this.state.members.map((member)=> <MemberRow
                 member={member}
                 />)
             }
          </tbody>
        </table>
      </div>
    )
  }
}