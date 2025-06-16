import { CrudRepository } from '../common/curd.repository'
import { Issue } from './issue.entity'

export interface IssueRepository extends CrudRepository<Issue> {
}