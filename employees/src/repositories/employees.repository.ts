import {DefaultCrudRepository} from '@loopback/repository';
import {Employees, EmployeesRelations} from '../models';
import {EmployeesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeesRepository extends DefaultCrudRepository<
  Employees,
  typeof Employees.prototype.id,
  EmployeesRelations
> {
  constructor(
    @inject('datasources.employees') dataSource: EmployeesDataSource,
  ) {
    super(Employees, dataSource);
  }
}
