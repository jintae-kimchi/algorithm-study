/**
 * https://leetcode.com/problems/unique-email-addresses/description/
 */

function numUniqueEmails(emails: string[]): number {
  const set = new Set<string>();
  emails.forEach((email) => {
    const [local, domain] = email.split("@");
    const [left] = local.split("+");
    const localResult = left.split("").filter((ch) => ch !== ".");
    set.add(`${localResult}@${domain}`);
  });

  return set.size;
}
