import * as React from "react";
import { hot } from "react-hot-loader";
import '../App.css';
import {data} from './datasource'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel, FilterSettingsModel} from '@syncfusion/ej2-react-grids';


const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import { DataManager } from "@syncfusion/ej2-data";

class App extends React.Component<Record<string, unknown>, undefined> {
  public data2 = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/'
  });
  
  public groupSettings: GroupSettingsModel = { columns: ['EmployeeID'] };
  public pageSettings: PageSettingsModel = { pageSize: 16 }
  public sortSettings: SortSettingsModel = { columns: [
    {field: 'EmployeeID', direction: 'Ascending' }
  ] };
  public filterSettings: FilterSettingsModel = { columns: [
    {field: 'EmployeeID', operator: 'greaterthan', value: 2 }
  ] };
  public render() {
    return (
      <div>
        <h2>First Grid</h2>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
          allowGrouping={true} groupSettings={ this.groupSettings }
          filterSettings = {this.filterSettings}
          allowSorting={true} sortSettings={ this.sortSettings } allowFiltering={true}>
            <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
          </GridComponent>
          <h2>Second Grid</h2>
          <GridComponent dataSource={this.data2} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
           </GridComponent>
           <h3>End of Grid Page</h3>
      </div>
      
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
