import NodeEnvironment from 'jest-environment-node';
import type { Config, Circus } from '@jest/types';
import type {EnvironmentContext} from '@jest/environment';

export default class CircusEnvironment extends NodeEnvironment {
	testPath?: string;
	docblockPragmas?: Record<string, string | string[]>;

	constructor(config: Config.ProjectConfig, context: EnvironmentContext) {
		super(config);
		this.docblockPragmas = context?.docblockPragmas;
		this.testPath = context?.testPath;
	}

	async setup() {
		await super.setup();
	}

	async teardown() {
		await super.teardown();
	}

	handleTestEvent(event: Circus.Event, state: Circus.State) {
		console.log(`Event: ${event.name}`);
		switch (event.name) {
			case 'setup':
				break;
			case 'add_hook':
				break;
			case 'add_test':
				break;
			case 'run_start':
				break;
			case 'test_skip':
				break;
			case 'test_todo':
				break;
			case 'start_describe_definition':
				break;
			case 'finish_describe_definition':
				break;
			case 'run_describe_start':
				break;
			case 'test_start':
				break;
			case 'hook_start':
				break;
			case 'hook_success':
				break;
			case 'hook_failure':
				break;
			case 'test_fn_start':
				break;
			case 'test_fn_success':
				break;
			case 'test_fn_failure':
				break;
			case 'test_done':
				break;
			case 'run_describe_finish':
				break;
			case 'run_finish':
				break;
			case 'teardown':
				break;
			case 'error':
				break;
			default:
				break;
		}
	}
}
