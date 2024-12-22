import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: "todo",
        component: TodoComponent
    },
    {
        path: "",
        component: AuthComponent
    }
];
