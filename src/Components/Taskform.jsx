export default function Taskform() {
    return(
        <form>
            <div>
                <input type="text" placeholder="Enter the task"/>
                <button type="submit">Add task</button>
            </div>

            <div>
                <select>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option calue="low">Low</option>
                </select>

                <select>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}