// StudyPlay Content Registry
// AUTO-GENERATED — do not edit by hand. Run build_subjects.py to regenerate.

export const registry = {
  degrees: [
    {
      id: 'mca',
      name: 'Master of Computer Applications',
      shortName: 'MCA',
      description: 'Advanced curriculum covering computer systems, programming, operating systems, and engineering.',
      semesters: [
        {
          id: 'sem1',
          number: 1,
          name: 'Semester 1',
          subjects: [
            {
              id: 'ca452',
              code: 'CA452',
              title: 'Computer Organization & Architecture',
              description: 'Digital logic circuits, CPU organization, bus architecture, memory hierarchy, pipelining, and multiprocessor systems.',
              unitsCount: 5,
              conceptsCount: 107,
              icon: 'Cpu',
              loader: () => import('./degrees/mca/sem1/ca452.js')
            },
            {
              id: 'ca453',
              code: 'CA453',
              title: 'C Programming',
              description: 'Computer fundamentals, networks, C syntax, pointers, data structures, dynamic memory, and file streams.',
              unitsCount: 5,
              conceptsCount: 161,
              icon: 'Code',
              loader: () => import('./degrees/mca/sem1/ca453.js')
            },
            {
              id: 'ca454',
              code: 'CA454',
              title: 'Unix & Shell Programming',
              description: 'UNIX architecture, shell scripting, sed & awk stream processing, system calls, IPC, and system administration.',
              unitsCount: 5,
              conceptsCount: 281,
              icon: 'Terminal',
              loader: () => import('./degrees/mca/sem1/ca454.js')
            },
            {
              id: 'ca455',
              code: 'CA455',
              title: 'Software Engineering',
              description: 'SDLC models, requirements analysis, modular design, cohesion/coupling, size metrics, white/black box testing, and SQA.',
              unitsCount: 4,
              conceptsCount: 142,
              icon: 'Layers',
              loader: () => import('./degrees/mca/sem1/ca455.js')
            },
            {
              id: 'ca456',
              code: 'CA456',
              title: 'Operating System',
              description: 'Process management, CPU scheduling algorithms, synchronization, deadlocks, virtual memory, paging, and file allocation.',
              unitsCount: 4,
              conceptsCount: 197,
              icon: 'Server',
              loader: () => import('./degrees/mca/sem1/ca456.js')
            },
          ]
        },
        { id: 'sem2', number: 2, name: 'Semester 2', isUpcoming: true, subjects: [] },
        { id: 'sem3', number: 3, name: 'Semester 3', isUpcoming: true, subjects: [] },
        { id: 'sem4', number: 4, name: 'Semester 4', isUpcoming: true, subjects: [] }
      ]
    },
    {
      id: 'msc-ai',
      name: 'MSc Artificial Intelligence (Sacred Heart College)',
      shortName: 'MSc AI',
      description: 'Specialized syllabus in Machine Learning, Deep Learning, NLP, Computer Vision, and Autonomous Agents.',
      isUpcoming: true,
      semesters: [
        { id: 'sem1', number: 1, name: 'Semester 1', isUpcoming: true, subjects: [] },
        { id: 'sem2', number: 2, name: 'Semester 2', isUpcoming: true, subjects: [] },
        { id: 'sem3', number: 3, name: 'Semester 3', isUpcoming: true, subjects: [] },
        { id: 'sem4', number: 4, name: 'Semester 4', isUpcoming: true, subjects: [] }
      ]
    }
  ]
};

export default registry;
