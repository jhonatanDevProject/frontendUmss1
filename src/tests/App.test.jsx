import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, findByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '~/App';
import { Client } from '~/pages';
import { createRouterWrapper } from '~/tests/wrapper';
import clients from '~/data/mockedClients';

describe('App content layout pattern', () => {
	it('There is a navbar', () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId('navbar');
		expect(el).toBeInTheDocument();
	});
	it('There is a content', () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId('content');
		expect(el).toBeInTheDocument();
	});
	it('There is a header', () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId('header');
		expect(el).toBeInTheDocument();
	});
	it('There is a footer', () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId('footer');
		expect(el).toBeInTheDocument();
	});
});
describe('Navbar links and navigation', () => {
	it('There is 4 links in Navbar', () => {
		render(<App />, { wrapper: MemoryRouter });
		const home_link = screen.getByTestId('home-link');
		const client_link = screen.getByTestId('client-link');
		const all_link = screen.getByTestId('all-link');
		const employee_link = screen.getByTestId('employee-link');
		const links = [home_link, client_link, all_link, employee_link];

		links.forEach((l) => {
			expect(l).toBeInTheDocument();
		});
	});
	it('Home link navigation', async () => {
		const history = createMemoryHistory();
		render(<App />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const home_link = screen.getByTestId('home-link');
		const client_link = screen.getByTestId('client-link');
		await user.click(client_link);
		await user.click(home_link);
		const home_content = await waitFor(() =>
			screen.getByTestId('home-content'),
		);
		const home_text = await screen.findByText('ULTRACAR APP');
		expect(home_content).toBeInTheDocument();
		expect(home_text).toBeVisible();
	});
	it('Client link navigation', async () => {
		const history = createMemoryHistory();
		render(<App />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const client_link = screen.getByTestId('client-link');
		await user.click(client_link);
		const client_content = await waitFor(() =>
			screen.getByTestId('client-content'),
		);
		const client_text = await screen.findByText('Identificação do cliente');
		expect(client_content).toBeInTheDocument();
		expect(client_text).toBeVisible();
	});
	it('Orders link navigation', async () => {
		const history = createMemoryHistory();
		render(<App />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const all_link = screen.getByTestId('all-link');
		const employee_link = screen.getByTestId('employee-link');
		await user.click(all_link);

		const all_content = await waitFor(() => screen.getByTestId('all-content'));
		const all_text = await screen.findByText('Lista O.S. (Geral)');
		expect(all_content).toBeInTheDocument();
		expect(all_text).toBeVisible();

		await user.click(employee_link);

		const employee_content = await waitFor(() =>
			screen.getByTestId('employee-content'),
		);
		const employee_text = await screen.findByText('Lista O.S. (Responsável)');
		expect(employee_content).toBeInTheDocument();
		expect(employee_text).toBeVisible();
	});
});
describe('Client Details', () => {
	it('There is a card for each client', async () => {
		render(<Client />, { wrapper: MemoryRouter });

		clients.forEach((c) => {
			const cli_card = screen.getByTestId(`cli-${c.id}`);
			expect(cli_card).toBeInTheDocument();
			expect(cli_card).toBeVisible();
		});
	});
	it("If I click on a card then I'm taken to its details.", async () => {
		const history = createMemoryHistory();
		render(<Client />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const client = clients[4];

		const qrCodeBtn = screen.getByTestId(`click-${client.id}`);
		await user.click(qrCodeBtn);

		const title = await screen.findByText('Detalhes do cliente');
		const cli_name = await screen.findByText(client.name);

		expect(title).toBeVisible();
		expect(cli_name).toBeVisible();
	});
});
