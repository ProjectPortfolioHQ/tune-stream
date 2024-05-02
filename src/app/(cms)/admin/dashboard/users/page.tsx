'use client';

import { useEffect, useState } from "react";
import { Table, Button } from "@radix-ui/themes";

export default function CrudUserPage() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/cms/v1/users');
        const data = await response.json();
        setUsers(data.data)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  if (isLoading) return <p>Loading...</p>

  return <div>
    <div className="mb-8 flex justify-end">
      <Button>Create</Button>
    </div>
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={"center"} width={"200px"}>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map(user =>
          <Table.Row key={user.id}>
            <Table.RowHeaderCell>{user.id}</Table.RowHeaderCell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell justify={"center"} width={"200px"}>
              <Button mr={"2"}>Edit</Button>
              <Button>Delete</Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
    <div>

    </div>
  </div>
}
