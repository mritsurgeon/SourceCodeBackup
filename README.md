# Project Summary

## Original Project

The original project is a command-line interface (CLI) written in Go, designed for backing up code repositories from various sources, including GitHub. The CLI, when executed, performs repository backups and logs relevant information.

## Forked Project (mritsurgeon/SourceCodeBackup)

This forked project extends the original CLI by providing a user-friendly web-based graphical user interface (GUI) for managing and visualizing the backup process. The UI is built using React for the frontend and Express (Node.js) for the backend.

## Key Features and Components

### Backend (Server.js)

#### WebSocket Communication

- Enables real-time communication between the server and clients using WebSockets.
- Maintains a WebSocket server for updating clients with log information during backup processes.

#### Log File Handling

- Manages a log file (`history/history.log`) to record server activities.

#### Backup Execution

- Implements a function (`spawnGoProcess`) to spawn a Go process for executing backups.
- Sends log data to connected WebSocket clients, ensuring real-time feedback.

#### Backup Statistics and Configuration Management

- Provides endpoints (`/api/backupStatistics` and `/api/configFiles`) for retrieving backup statistics and available YAML configuration files.

### Frontend (App.js, wizard.jsx, history.jsx, summary.jsx, stats.jsx)

#### React Router and Material-UI

- Utilizes React Router for client-side routing, allowing users to navigate through different views.
- Implements Material-UI components for a clean and responsive layout.

#### Backup Configuration Wizard

- Offers a step-based wizard (`StepWizard`) for creating backup jobs with multiple configuration steps (Step1 to Step5).
- Configures routes for source, destination, scheduler, statistics, job list, and history.

#### Real-Time Log Updates

- Implements a WebSocket connection in `history.jsx` to receive real-time log updates from the server.

#### Summary Page

- Constructs a summary page (`summary.jsx`) that displays user inputs and allows users to initiate the backup process.

#### Backup Statistics

- Retrieves and presents backup statistics using Recharts for a clear visualization.

## Purpose of the Forked Project

The primary purpose of this forked project is to enhance the original CLI by adding a user-friendly web-based interface for managing, configuring, and monitoring code repository backups. The UI streamlines the backup configuration process and provides real-time feedback on backup activities, enhancing the overall user experience.

## Contribution Highlights

### Web-Based GUI

- Introduces a web-based graphical user interface for a more accessible and interactive backup configuration.

### Real-Time Feedback

- Implements real-time updates via WebSockets, keeping users informed about the progress of backup operations.

### Backup Statistics

- Enhances the user experience with a statistical visualization of successful runs and backup durations.
-
### Configuration File Management

- Implements the creation of a new `conf.yml` file during the backup configuration process.
- Enables fetching and displaying existing `conf.yml` files in the job list (`Jobs.jsx`).

### Initiate Run Feature

- Adds a new struct to the main Go application (`gickup`) to support imitating a backup run.
- Ensures proper handling of the struct during the execution of backup jobs.

### Clean and Responsive Design

- Utilizes Material-UI for a clean and responsive design, ensuring a modern and intuitive user interface.

## Additional Contributions and Future Work

### Constants Refactoring

- Addresses the need for global configuration by refactoring static folder paths (`const basedirectory + '/backups'` and `const BACKUP_ROOT_FOLDER = '/backups'`).
- Allows users to set these variables globally in the UI or via a configuration YAML file (`conf.yml`).

## Future Work

- **Further UI Enhancements:** Continued refinement and expansion of the UI for an even more user-friendly experience.
- **Comprehensive Backup Management:** Exploration of additional features to provide comprehensive backup management capabilities.

# Screenshots:
### List of all Jobs View ( With RUN NOW )
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/291dbb78-b535-4c7a-9535-4def7a92f7ce)

### Step 1 Of create Job Wizard  , Name & Descripton 
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/fa641830-de7d-4aa3-98f9-3e6eada29997)

### Step 2 Of create Job Wizard , Source Selection 
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/f10cceb6-88db-44c3-ac63-72476d6d1a25)

### Step 2 Of create Job Wizard , Source Selection ( Settings Part 1 ) 
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/646b17b4-c04a-49bb-93e5-b5858fdac2cd)

### Step 2 Of create Job Wizard , Source Selection ( Settings Part 2 ) 
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/b0983812-c621-470b-a55e-4398ee31c593)

### Step 3 Of create Job Wizard , Destination Selection  
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/87623e9b-e371-435c-87f6-6cfa4037699b)

### Step 3 Of create Job Wizard , Destination Selection ( Settings )
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/966f0e15-7c77-4296-8223-d22698cf2ea5)

### Step 4 Of create Job Wizard , Job Scheduler 
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/a44ad6a8-ef6e-47ec-8b4d-c849110a26cd)

### Step 5 Of create Job Wizard , Summary ( Finish Action out to YML )  
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/349e4aae-fe76-43db-af06-ecbd0d34c3df)

### History of all Jobs Runs
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/52a967b0-7992-42d9-814b-e59ea715dc24)

### Job Run Action History
![image](https://github.com/mritsurgeon/SourceCodeBackup/assets/59644778/e225dd9f-083d-4bce-83d0-d9076ee44301)

