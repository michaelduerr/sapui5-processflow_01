var pf = new sap.suite.ui.commons.ProcessFlow({
  nodes: {
    path: '/nodes',
    template: new sap.suite.ui.commons.ProcessFlowNode({
      nodeId: '{nodeId}',
      laneId: '{laneId}',
      title: '{title}',
      children: '{children}',
      titleAbbreviation: '{titleAbbreviation}',
      stateText: '{stateText}',
      state: '{state}'
    })
  },
  lanes: {
    path: '/lanes',
    template: new sap.suite.ui.commons.ProcessFlowLaneHeader({
      laneId: '{laneId}',
      iconSrc: '{iconSrc}',
      text: '{text}',
      position: '{position}'
    })
  }
});


var model = new sap.ui.model.json.JSONModel({
  nodes: [
    {
      nodeId: '1',
      laneId: "id0",
      title: "Sales Order 1",
      titleAbbreviation: "SO 1",
      children: ['2','11','12'],
      state: "Positive",
      stateText: "Positive Status"
    },
    {
      nodeId: '2',
      laneId: "id1",
      title: "Delivery 13",
      titleAbbreviation: "DD 1",
      children: ["10"],
      state: "Positive",
      stateText: "OK Delivery"
    },
    {
      nodeId: '10',
      laneId: "id3",
      title: "Accounting Document 7",
      titleAbbreviation: "AD 7",
      state: "Negative",
      stateText: "Negative Status"
    },
    {
      nodeId: '11',
      laneId: "id2",
      title: "Invoice 4",
      titleAbbreviation: "INV 4",
      state: "Negative",
      stateText: "Negative Status should not run over more than two rows of text"
    },
    {
      nodeId: '12',
      laneId: "id2",
      title: "Invoice 5",
      titleAbbreviation: "INV 5",
      children: ["5"],
      state: "Neutral"
    },
    {
      nodeId: '5',
      laneId: "id3",
      title: "Accounting Document 10",
      titleAbbreviation: "AD 10",
      state: "Planned"
    }
  ],
  
  lanes: [
    {
      laneId: "id0",
      iconSrc: "sap-icon://order-status",
      text:"InOrder", 
      position: 0
    },
    { 
      laneId: "id1", 
      iconSrc: "sap-icon://monitor-payments",
      text: "In Delivery",
      position: 1
    },
    {
      laneId: "id2",
      iconSrc: "sap-icon://payment-approval", 
      text: "InInvoice",
      position:2
    },
    { 
      laneId: "id3", 
      iconSrc: "sap-icon://money-bills",
      text: "In Accounting",
      position: 3
    }
  ]  
});


pf.setModel(model);
pf.addEventDelegate({
  onAfterRendering: function(){
    this.zoomIn();
  }
}, pf);

new sap.ui.commons.Button({
  text: 'ZoomIn',
  press: function() {
    pf.zoomIn();
  }
}).placeAt('content');

new sap.ui.commons.Button({
  text: 'ZoomOut',
  press: function() {
    pf.zoomOut();
  }
}).placeAt('content');


pf.placeAt('content');