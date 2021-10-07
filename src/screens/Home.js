import React, { useState } from "react";
import {
	Card,
	CardHeader,
	Text,
	List,
	StandardListItem,
	ValueState,
	ProgressIndicator,
	Title,
	TitleLevel,
	FlexBox,
	FlexBoxJustifyContent,
	FlexBoxWrap,
	FlexBoxDirection,
	AnalyticalTable,
	Icon
} from "@ui5/webcomponents-react";
import { useHistory } from "react-router-dom";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { MyCustomElement } from '../components/MyCustomElement'; 

import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
import '@ui5/webcomponents-icons/dist/line-chart.js';
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/list.js";
import "@ui5/webcomponents-icons/dist/table-view.js";

import dataset from '../data/dataset';
import { tableData, tableColumns } from '../data/analyticaldata';

const Home = () => {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
	const [loading, setLoading] = useState(false);

	const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
	const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

	const handleHeaderClick = () => {
		if (toggleCharts === "lineChart") {
		  setLoading(true);
		  setTimeout(() => {
			setLoading(false);
			setToggleCharts("barChart");
		  }, 1000);
		} else {
		  setLoading(true);
		  setTimeout(() => {
			setLoading(false);
			setToggleCharts("lineChart");
		  }, 1000);
		}
	};

  const history = useHistory();
  const handleProgressHeaderClick = () => {
    history.push("/detail");
  }

  return (
    <FlexBox justifyContent={FlexBoxJustifyContent.Center} wrap={FlexBoxWrap.Wrap} style={spacing.sapUiContentPadding}>
		{/* Below is a component that shows how to create custom elements with SAP Fiori design principles */}
		{/* <MyCustomElement /> */}
				{/* Line and Bar Chart */}
				<Card 
					header={
						<CardHeader titleText="Card" 
						subtitleText={`Click here to switch to a ${switchToChart}`}
						interactive 
						onClick={handleHeaderClick} 
						avatar={
							<Icon name={ toggleCharts === "lineChart" ? "line-chart" : "horizontal-bar-chart" } />
						} 
					/>} 
					style={{ width: "350px", ...spacing.sapUiContentPadding }}
					>
					<Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>

					{toggleCharts === "lineChart" ? (
						<LineChart 
							measures={[ { accessor: "data", label: "Stock Price" } ]} 
							dimensions={[ {accessor: "month"} ]} 
							dataset={dataset}
							loading={loading}
						/>
					) : (
						<BarChart 
							measures={[ { accessor: "data", label: "Stock Price" } ]} 
							dimensions={[ {accessor: "month"} ]} 
							dataset={dataset}
							loading={loading}
						/>
					)}
				</Card>

				{/* List Component */}
				<Card
					header={
						<CardHeader
						titleText="Progress"
						subtitleText="List"
            interactive 
            onClick={handleProgressHeaderClick}
						avatar={<Icon name="list" />}
						/>
					}
					style={{ width: "350px", ...spacing.sapUiContentPadding }}
				>
					<List>
						<StandardListItem additionalText="finished" additionalTextState={ValueState.Success}>Activity 1</StandardListItem>

						<StandardListItem additionalText="failed" additionalTextState={ValueState.Error}>Activity 2</StandardListItem>

						<StandardListItem additionalText="in progress" additionalTextState={ValueState.Warning} style={{height: "80px"}}>
						<FlexBox direction={FlexBoxDirection.Column}>
							<Title level={TitleLevel.H5}>Activity 3</Title>
							<ProgressIndicator value={89} valueState={ValueState.Success} />
						</FlexBox>
						</StandardListItem>
						<StandardListItem additionalText="in progress" additionalTextState={ValueState.Warning} style={{height: "80px"}}>
							<FlexBox direction={FlexBoxDirection.Column}>
								<Title level={TitleLevel.H5}>Activity 4</Title>
								<ProgressIndicator value={5} valueState={ValueState.Error} />
							</FlexBox>
						</StandardListItem>
					</List>
				</Card>

				{/* Analytical Table */}
				<Card
					header={
						<CardHeader
						titleText="Analytical Table"
						avatar={<Icon name="table-view" />}
						/>
					}
					style={{ maxWidth: "950px", ...spacing.sapUiContentPadding }}
					>
						{/* You can add many more properties to this! Check out the doc to see how you can filter the list */}
					<AnalyticalTable data={tableData} columns={tableColumns} visibleRows={5} />
				</Card>
			</FlexBox>

  );
}

export default Home;