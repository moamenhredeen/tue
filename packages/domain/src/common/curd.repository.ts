/**
 * Crud Repository
 */
export interface CrudRepository<Entity, ID = string> {
	/**
	 * get all entities
	 */
	get(): Promise<Array<Entity>>;

	/**
	 * get by id
	 * @param id the id of entity to get
	 */
	getById(id: ID): Promise<Entity>;

	/**
	 * inset a new entity
	 * @param entity
	 */
	create(entity: Entity): Promise<Entity>;

	/**
	 * update an existing entity
	 * @param id the id of the entity to update
	 * @param entity updated entity
	 */
	update(id: ID, entity: Partial<Entity>): Promise<Entity>;

	/**
	 * delete existing entity
	 * @param id the id of the entity
	 */
	delete(id: ID): Promise<boolean>;
}