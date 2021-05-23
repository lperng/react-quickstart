import * as React from "react";
import { hot } from "react-hot-loader";
import '../App.css';
import {data} from './datasource'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';


const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public pageSettings: PageSettingsModel = { pageSize: 16 }
  public sortSettings: SortSettingsModel = { columns: [
    {field: 'EmployeeID', direction: 'Ascending' }
] };
  public render() {
    return (
      <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
        allowSorting={true} sortSettings={ this.sortSettings }>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
