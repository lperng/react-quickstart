import * as React from "react";
import '../App.css';
import {data} from './datasource'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel, FilterSettingsModel} from '@syncfusion/ej2-react-grids';
import "./../assets/scss/App.scss";
import Main from "./Main";

export default class Main1 extends React.Component<Record<string, unknown>, undefined> {
  
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
        <h2>Grid - from Local Data</h2>
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
      </div>     
    );
  }
}
