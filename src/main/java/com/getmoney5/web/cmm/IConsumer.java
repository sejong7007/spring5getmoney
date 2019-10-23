package com.getmoney5.web.cmm;

@FunctionalInterface
public interface IConsumer<T> {
	public void accept(T t);
}
