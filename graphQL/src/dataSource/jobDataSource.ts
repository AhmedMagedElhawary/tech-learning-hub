// src/dataSource/jobDataSource.ts
import { DataSource } from 'apollo-datasource';
import { MappedJob } from '../modules/job/resolvers';
import { InputMaybe, Job } from '../generatedModels';

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

  createJob(title: string, description: InputMaybe<string> | undefined): Job {
    console.log('Creating job with title:', title, 'and description:', description);
    return {
      id: (jobTable.length + 1).toString(),
      title,  
      description: description || '',
      datePosted: new Date().toISOString(),   
    };
    }
}
