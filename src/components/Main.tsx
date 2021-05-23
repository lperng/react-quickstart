import * as React from "react";
import { hot } from "react-hot-loader";
import '../App.css';
import {data} from './datasource'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel, FilterSettingsModel} from '@syncfusion/ej2-react-grids';
import { DataManager } from "@syncfusion/ej2-data";

export default class Main extends React.Component<Record<string, unknown>, undefined> {
  public data2 = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/'
  });
  
  public render() {
    return (
      <div>
        <h2>Grid - Data from Remote</h2>
          <GridComponent dataSource={this.data2} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
           </GridComponent>
      </div>
      
    );
  }
}
