-- name: GetIssues :many
select * 
from issues;


-- name: GetIssueById :one
select *
from issues
where id = $1;

-- name: CreateIssue :one
INSERT INTO issues (id, title, content) 
VALUES ($1, $2, $3)
RETURNING *;