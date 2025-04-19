// src/dataSource/jobDataSource.ts
import { DataSource } from 'apollo-datasource';
import { MappedJob } from '../modules/job/resolvers';

const jobTable: MappedJob[] = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Develop and maintain software applications.',
  },
];

export class JobDataSource extends DataSource {
  getJob(id: string): MappedJob | null {
    return jobTable.find((job) => job.id === id) || null;
  }

  getAllJobs(): MappedJob[] {
    return jobTable;
  }
}
