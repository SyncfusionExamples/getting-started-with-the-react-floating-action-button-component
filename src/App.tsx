import './App.css';
import {ListViewComponent} from '@syncfusion/ej2-react-lists';
import {FabComponent} from '@syncfusion/ej2-react-buttons';
function App() {
  let listViewObject: ListViewComponent;
  const listData = [
    { id: 's_01', text: 'Robert' },
    { id: 's_02', text: 'Nancy' },
    { id: 's_05', text: 'Jenifer' },
    { id: 's_03', text: 'Andrew' },
    { id: 's_06', text: 'Margaret' },
    { id: 's_07', text: 'Steven' },
    { id: 's_08', text: 'Michael' }
  ];
  const onBtnClick=()=>{
    let newItem = [{id:'s_09', text: 'Daniel'}];
    listViewObject.addItem(newItem);
  }
  return (
    <div className="App">
      <ListViewComponent ref={((list:ListViewComponent)=>listViewObject=list)}
      id='list' 
      dataSource={listData} 
      showHeader={true} 
      headerTitle="Contacts"
      width={300}></ListViewComponent>
      <FabComponent target='#list' iconCss='e-icons e-plus-small' onClick={onBtnClick}
      iconPosition="Left" position='BottomRight' cssClass='e-outline'>Add</FabComponent>
    </div>
  );
}

export default App;
