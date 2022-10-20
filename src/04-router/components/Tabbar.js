import { HashRouter, NavLink, Routes } from "react-router-dom";

export default function Tabbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="films" style={({ isActive }) => ({color: isActive ? 'red': 'gray'})}>电影</NavLink>
                </li>
                <li>
                    <NavLink to="cinemas" style={({ isActive }) => ({color: isActive ? 'red': 'gray'})}>影院</NavLink>
                </li>
                <li>
                    <NavLink to="center" style={({ isActive }) => ({color: isActive ? 'red': 'gray'})}>我的</NavLink>
                </li>
            </ul>
        </div>
    )
}