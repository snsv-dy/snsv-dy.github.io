var last_gen = 0;
function genData() {
	var tdata = [[
	'user@site.com',
	'12-345',
	'123-456-32-18',
	'ABA300000',
	'192.168.1.1',
	'www.example.com',
	'c:\\windows\\user',
	'c:\\Windows\\user',
	'/etc/passwd',
	'::ffff:c000:0280',
	'123 456 789'],
	[
	'jacek@stasiak.com',
	'97-400',
	'654-321-99-22',
	'ABC500000',
	'127.0.0.1',
	'www.google.com',
	'c:\\win\\ccc',
	'c:\\Msdos\\abc',
	'/etc/tce',
	'::ffff:c000:0280',
	'999 999 931'],
	[
	'test@test.pl',
	'22-200',
	'111-231-99-99',
	'ACC503000',
	'10.173.0.1',
	'www.bing.com',
	'c:\\win\\cvb',
	'c:\\Msdos\\ddt',
	'/etc/important',
	'::ffff:c000:0280',
	'224 444 444']];

	var rand_get = tdata[last_gen];
	last_gen = (last_gen + 1) % tdata.length;

	const fields = ["email", "postal", "nip", "dowod", "ip", "www", "windirbig", "windir", "etcdir", "ipv6addr", "phonenb"];
	var data = {}
	var count = 0;
	for (var i of fields) {
		document.forms[0][i].value = rand_get[count];
		count++;
	}
}