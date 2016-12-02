import React, {Component} from "react";
import Copyright from "../components/blocks/_copyright";
import PanelContent from "../components/blocks/_panel_content";
import IndexTables from "../components/blocks/_index_tables";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {
          title: "Market",
          list: [
            "Actual Prices (Eve-Central)",
            "Prices Review Of One Item In Different Market Hubs",
            "Buying And Selling Price Margin‎ In Different Systems",
            "Search Of Fast And Slow Auctions",
            "Dynamic Pricing Review",
            "Orders Review In Real Time"
          ]
        },
        {
          title: "Production",
          list: [
            "Actual Item Base",
            "Changing Of Material Quantity Required For Production In Manual Mode",
            "Drafting Settings Specifying",
            "Additional Expenditures Specifying",
            "Profit Сalculation From Production In Real Time",
            "Unlimited Item Lists"
          ]
        },
        {
          title: "More",
          list: [
            "Table Ore/Ice Processing",
            "Minerals Exchange And Trade",
            "Moon resources",
            "Planet resources"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <IndexTables listTables={this.state.tableData}/>

        <PanelContent />

        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
              <tr>
                <th className="t-a_l">Market</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="padd-3"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}

export default Home;