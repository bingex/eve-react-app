import React, {Component} from "react";
import OneColumnTable from "./../oneColumnTable";
import SimpleList from "./../SimpleList";

export default class index_tables extends Component {

  render() {
    let market = <SimpleList list={this.props.listTables[0].list}/>
    let productions = <SimpleList list={this.props.listTables[1].list}/>
    let more = <SimpleList list={this.props.listTables[2].list}/>

    return (
      <div className="row">
        <div className="col-md-4 col-first">
          <OneColumnTable title={this.props.listTables[0].title} _class="t-a_l" list={market}/>
        </div>
        <div className="col-md-4 col-midd">
          <OneColumnTable title={this.props.listTables[1].title} _class="t-a_l" list={productions}/>
        </div>
        <div className="col-md-4 col-last">
          <OneColumnTable title={this.props.listTables[2].title} _class="t-a_l" list={more}/>
        </div>
      </div>
    )
  }
}