# CodinAgentDemo Repository Instructions

**ALWAYS** follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

## Repository Overview
This is a minimal Demo repository currently containing only basic project structure. The repository is configured for .NET development based on the comprehensive Visual Studio .gitignore file, but currently contains no source code, build scripts, or applications to run.

## Working Effectively

### Environment Setup
The following development tools are available and validated to work:
- .NET SDK 8.0.119 (with ASP.NET Core 8.0.19 runtime)
- Node.js v20.19.4 with npm
- Python 3.12.3
- Git 2.51.0

### Current Repository State
- **NO BUILD REQUIRED**: Repository contains no source code or build scripts
- **NO TESTS TO RUN**: No test framework or test files exist
- **NO APPLICATION TO RUN**: No executable code exists
- Repository has standard .NET .gitignore configuration

### Repository Structure
```
.
├── .git/                    # Git metadata  
├── .github/                 # GitHub configuration (contains these instructions)
│   └── copilot-instructions.md
├── .gitignore              # Comprehensive .NET/Visual Studio gitignore
└── README.md               # Simple "# Demo" header
```

### When Code Is Added
Once source code is added to this repository, typical .NET development workflows will apply:

#### For .NET Projects
```bash
# Restore dependencies (when package references exist)
dotnet restore

# Build the solution/project  
dotnet build
# Expected time: 15-60 seconds for small projects, up to 5 minutes for larger solutions
# NEVER CANCEL: Set timeout to 10+ minutes for larger solutions

# Run tests (when test projects exist)
dotnet test
# Expected time: 5-30 seconds for small test suites, up to 10 minutes for comprehensive suites
# NEVER CANCEL: Set timeout to 15+ minutes for comprehensive test suites

# Run the application (when executable project exists)
dotnet run
# Expected time: 2-10 seconds to start
```

#### For Node.js Projects (if added)
```bash
# Install dependencies (when package.json exists)
npm install
# Expected time: 30-60 seconds for small projects, up to 5 minutes for large projects
# NEVER CANCEL: Set timeout to 10+ minutes

# Run tests (when test scripts exist)
npm test
# Expected time: varies by framework
# NEVER CANCEL: Set timeout to 15+ minutes

# Start development server (when dev script exists)
npm run dev
```

### Validation Steps
Since no code exists currently:
- **Build validation**: Not applicable - no build to execute
- **Test validation**: Not applicable - no tests to run  
- **Functionality validation**: Not applicable - no application functionality exists

When code is added, validation should include:
- Successful build completion
- All tests passing
- Basic application functionality verification
- Linting and formatting checks (if configured)

### Development Workflow
1. **Check repository state**: Run `ls -la` to see current files
2. **Verify .NET availability**: Run `dotnet --version` to confirm SDK access
3. **When adding code**: Follow .NET project conventions and utilize existing .gitignore
4. **Before committing**: Ensure new code builds and tests pass (once added)

### Common Tasks and Expected Outcomes

#### Repository Inspection
```bash
# List repository contents
ls -la
# Expected output: .git/, .github/, .gitignore, README.md

# Check git status
git status
# Expected: Clean working directory or modified files you're working on

# View README
cat README.md
# Expected output: "# Demo"
```

#### Tool Verification  
```bash
# Verify .NET SDK
dotnet --version
# Expected output: 8.0.119

# Check available .NET templates (for future use)
dotnet new list
# Expected: List of available project templates

# Verify Node.js (for future use)
node --version
# Expected output: v20.19.4
```

### Notes for GitHub Copilot Agents
- Repository is currently in initial/template state
- .gitignore suggests .NET development intent
- No build, test, or run processes exist yet
- All development tools are available and ready for use
- Instructions should be updated when actual code and build processes are added
- Focus changes on minimal, surgical modifications to existing structure
