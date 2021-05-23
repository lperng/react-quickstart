import * as React from "react";
import "../App.css";
import { data } from "./datasource";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  GroupSettingsModel,
} from "@syncfusion/ej2-react-grids";
import {
  Inject,
  Page,
  PageSettingsModel,
  Sort,
  SortSettingsModel,
  FilterSettingsModel,
} from "@syncfusion/ej2-react-grids";
import "./../assets/scss/App.scss";
import { Toolbar } from "@syncfusion/ej2-navigations";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

/* eslint-disable */
export default class Main1 extends React.Component<Record<string, unknown>, undefined> {
  public groupSettings: GroupSettingsModel = { columns: ['EmployeeID'] };
  public pageSettings: PageSettingsModel = { pageSize: 16 }
  public sortSettings: SortSettingsModel = { columns: [
    {field: 'EmployeeID', direction: 'Ascending' }
  ] };
  public filterSettings: FilterSettingsModel = { columns: [
    {field: 'EmployeeID', operator: 'greaterthan', value: 2 }
  ] };

  private gridInstance: GridComponent;
  private alertDialogInstance: DialogComponent;
  public toolbarOptions: any = [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' }, 
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }];
  private visible = false;
  private animationSettings: any = { effect: 'None', duration: 400, delay:0 };
  public selectionsettings: Object = { type: 'Multiple' };
  private alertButtons = [{
    // Click the footer buttons to hide the Dialog
    click: () => {
        this.alertDialogInstance.hide();
    },
    buttonModel: { content: 'OK', isPrimary: true }
  }];
  clickHandler(args: any) {
    if(this.gridInstance.getSelectedRecords().length>0) {
        let withHeader: boolean = false;
        if (args.item.id === 'copyHeader') {
            withHeader = true;
        }
        this.gridInstance.copy(withHeader);
    } else {
        this.alertDialogInstance.show();
    }
  }

  public render() {
    return (
      <div>
        <h2>Grid - from Local Data</h2>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
          toolbar={this.toolbarOptions} toolbarClick={this.clickHandler.bind(this)}
          allowGrouping={true} groupSettings={ this.groupSettings }
          filterSettings = {this.filterSettings} gridLines='Both'
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
