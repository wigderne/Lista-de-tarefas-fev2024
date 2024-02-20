import React, { useState } from "react";
import { Data } from "../mock/data";
import TableList from "../components/TableList/tableList";
import AddList from "../components/AddList/addList";
import DeleteList from "../components/DeleteList/deleteList";
import UpdateList from "../components/UpdateLIst/updateList";
import "./home.scss";

function Home() {
	const [list, setList] = useState(Data);
	const [sizeList, setSizeList] = useState(list.length);
	const [index, setIndex] = useState("");

	const [addOpen, setAddOpen] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	const handleReoladList = (newList) => {
		setList(newList);
	};

	const handleSetSizeList = (increment) => {
		setSizeList(sizeList + increment);
	};

	const getIndex = () => {
		return index;
	};

	return (
		<>
			<div className="home">
				<h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

				<TableList
					list={list}
					SetAddNew={() => setAddOpen(true)}
					SetUpdateList={() => setUpdateModal(true)}
					SetDeleteList={() => setDeleteModal(true)}
					setIndex={setIndex}
				/>
			</div>
			<div>
				<AddList
					AddisOpen={addOpen}
					addIsClose={() => setAddOpen(!addOpen)}
					list={list}
					sizeList={sizeList}
					increment={handleSetSizeList}
					isAdd={handleReoladList}
				/>
			</div>
			<div>
				<UpdateList
					updateIsOpen={updateModal}
					updateIsClose={() => setUpdateModal(!updateModal)}
					list={list}
					listItem={() => getIndex()}
					isUpdate={handleReoladList}
				/>
			</div>
			<div>
				<DeleteList
					DeleteIsOpen={deleteModal}
					DeleteIsClose={() => setDeleteModal(!deleteModal)}
					list={list}
					listItem={getIndex}
					isDelete={handleReoladList}
				/>
			</div>
		</>
	);
}

export default Home;
