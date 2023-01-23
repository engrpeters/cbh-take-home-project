const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  
  it('should return the partition key if it exists', () => {
    expect(deterministicPartitionKey({ partitionKey: 'test' })).toEqual('test');
  });

  it('should return the SHA3-512 hash of the event if the partition key does not exist', () => {
    const event = { a: 1, b: 2 };
    const hash = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(hash);
  });

  it('should return the SHA3-512 hash of the partition key if it longer than 256 characters', () => {
    const partitionKey = 'a'.repeat(257);
    const event = { partitionKey };
    const hash = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(hash);
  });

  it('should return 0 if no event is provided', () => {
    expect(deterministicPartitionKey()).toEqual('0');
  });


});
