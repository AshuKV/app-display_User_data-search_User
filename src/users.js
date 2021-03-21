import * as React from "react";
import { ImageField } from 'react-admin';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { Filter, ReferenceInput, SelectInput, TextInput, ReferenceField } from 'react-admin';
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
             <TextField source="id" />
             <TextField source="name" />
             <TextField source="username" />
             <EmailField source="email" />
            <ImageField source="Avatar" title="picture.title" />
        </Datagrid>
    </List>

);