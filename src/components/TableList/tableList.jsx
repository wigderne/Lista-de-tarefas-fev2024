import { useState } from "react";
import "./tableList.scss";
import iconEdit from "../../assets/edit.svg";
import iconDelete from "../../assets/delete.svg";
import iconCompleted from "../../assets/completed.svg";
import iconNoCompleted from "../../assets/no_completed.svg";
import Button from "../button";

function TableList({
	list,
	SetAddNew,
	SetUpdateList,
	SetDeleteList,
	setIndex,
}) {
	return (
		<>
			<div className="tableList">
				<table className="tableList__table-main">
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Urgente</th>
							<th>Status</th>
							<th>Alterar/Excluir</th>
						</tr>
					</thead>
					<tbody>
						{list.map((item, index) => (
							<tr key={index}>
								<td>{item.title}</td>
								<td>
									{item.grau == true ? (
										<img src={iconCompleted} alt="icon completed" />
									) : (
										<img src={iconNoCompleted} alt="icon no completed" />
									)}
								</td>
								<td>
									{item.completed == true ? (
										<img src={iconCompleted} alt="icon completed" />
									) : (
										<img src={iconNoCompleted} alt="icon no completed" />
									)}
								</td>
								<td>
									<button
										onClick={() => {
											SetUpdateList();
											setIndex(item.id);
										}}>
										<img src={iconEdit} alt="icon edit" />
									</button>
									<button
										onClick={() => {
											SetDeleteList();
											setIndex(item.id);
										}}>
										<img src={iconDelete} alt="icon delete" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<br></br><br></br>
						<tr>
							<td>
							<Button
								text={"Adicionar Tarefa"}
								className={"buttonC"}
								onClick={SetAddNew}
							/>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
}

export default TableList;
