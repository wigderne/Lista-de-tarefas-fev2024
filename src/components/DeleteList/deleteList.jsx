import Modal from "../modal";
import Button from "../button";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed_black.svg";
import "./deleteList.scss";

function DeleteList({ DeleteIsOpen, DeleteIsClose, list, listItem, isDelete }) {
	function handleDeleteList(id) {
		const itemList = list.findIndex((item) => item.id == id);
		const AddNewList = [...list];
		AddNewList.splice(itemList, 1);
		isDelete(AddNewList);
	}

	function handleVerifyList(id) {
		const getList = [...list];
		let item = getList.find((e) => e.id == id);
		return (
			<tr>
				<td>{item.title}</td>
				<td>
					{item.grau == true ? (
						<img src={iconCompleted} alt="icon completed" />
					) : (
						<img src={iconNoCompleted} alt="icon completed" />
					)}
				</td>
				<td>
					{item.completed == true ? (
						<img src={iconCompleted} alt="icon completed" />
					) : (
						<img src={iconNoCompleted} alt="icon completed" />
					)}
				</td>
			</tr>
		);
	}

	if (DeleteIsOpen) {
		return (
			<Modal>
				<div className="deleteList">
					<div className="deleteList__messagem">
						<h1>Deseja realmente deletar esse item?</h1>
						<div className="deleteList__table">
							<table>
								<thead>
									<tr>
										<th>Título</th>
										<th>Urgente</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>{handleVerifyList(listItem())}</tbody>
							</table>
						</div>
					</div>
					<div className="deleteList__actions">
						<Button
							text={"Não"}
							className={"buttonA"}
							onClick={DeleteIsClose}
						/>
						<Button
							text={"Sim"}
							className={"buttonB"}
							onClick={() => {
								handleDeleteList(listItem());
								DeleteIsClose();
							}}
						/>
					</div>
				</div>
			</Modal>
		);
	} else {
		return null;
	}
}

export default DeleteList;
